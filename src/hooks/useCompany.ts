import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Company } from '@/types/spaces';

export function useCompany() {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for registered company
    const storedCompanyId = localStorage.getItem('registered_company_id');
    if (storedCompanyId) {
      fetchCompany(storedCompanyId);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCompany = async (companyId: string) => {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('id', companyId)
      .maybeSingle();

    if (data && !error) {
      setCompany(data as Company);
    }
    setLoading(false);
  };

  const registerCompany = async (companyData: {
    name: string;
    email: string;
    phone?: string;
    industry?: string;
  }) => {
    const { data, error } = await supabase
      .from('companies')
      .insert(companyData)
      .select()
      .single();

    if (error) throw error;

    const newCompany = data as Company;
    localStorage.setItem('registered_company_id', newCompany.id);
    setCompany(newCompany);
    return newCompany;
  };

  return { company, loading, registerCompany, setCompany };
}
