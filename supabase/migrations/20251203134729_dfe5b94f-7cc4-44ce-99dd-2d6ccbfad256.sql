-- Create companies table
CREATE TABLE public.companies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  industry TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
  space_id TEXT NOT NULL,
  space_name TEXT NOT NULL,
  booking_date DATE NOT NULL,
  duration_type TEXT NOT NULL CHECK (duration_type IN ('hourly', 'daily')),
  hours INTEGER,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Public policies (since no auth, allow all operations for demo)
CREATE POLICY "Allow all operations on companies" ON public.companies FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on bookings" ON public.bookings FOR ALL USING (true) WITH CHECK (true);