import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Building2 } from 'lucide-react';

interface CompanyRegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  registerCompany: (data: { name: string; email: string; phone?: string; industry?: string }) => Promise<any>;
}

export function CompanyRegistrationDialog({ open, onOpenChange, onSuccess, registerCompany }: CompanyRegistrationDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!name || !email) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in company name and email',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      await registerCompany({ name, email, phone: phone || undefined, industry: industry || undefined });
      toast({
        title: 'Company Registered! 🎉',
        description: `${name} has been registered. You can now book spaces.`,
      });
      setName('');
      setEmail('');
      setPhone('');
      setIndustry('');
      onSuccess();
    } catch (error) {
      toast({
        title: 'Registration Failed',
        description: 'Please try again',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Register Your Company
          </DialogTitle>
          <DialogDescription>
            Register your company to book container spaces at 974 Innovation Hub
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="company-name">Company Name *</Label>
            <Input 
              id="company-name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Company Ltd."
            />
          </div>
          <div>
            <Label htmlFor="company-email">Email *</Label>
            <Input 
              id="company-email" 
              type="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@company.com"
            />
          </div>
          <div>
            <Label htmlFor="company-phone">Phone</Label>
            <Input 
              id="company-phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+974 1234 5678"
            />
          </div>
          <div>
            <Label htmlFor="company-industry">Industry</Label>
            <Input 
              id="company-industry" 
              value={industry} 
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Technology, Finance, etc."
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Registering...' : 'Register & Continue'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
