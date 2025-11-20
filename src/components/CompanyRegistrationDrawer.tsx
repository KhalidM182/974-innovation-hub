import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CompanyRegistrationDrawerProps {
  children?: React.ReactNode;
}

export const CompanyRegistrationDrawer = ({ children }: CompanyRegistrationDrawerProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll get back to you soon to discuss your innovation hub partnership.",
    });
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || (
          <Button className="bg-primary hover:bg-primary/90">
            <Building2 className="mr-2 h-4 w-4" />
            Register Your Company
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Register Your Company</DrawerTitle>
            <DrawerDescription>
              Join the Innovation Hub and be part of the future of collaborative workspaces.
            </DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="px-4 pb-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Your Company Ltd."
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input
                id="contactPerson"
                name="contactPerson"
                placeholder="John Doe"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your company</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="What services do you offer? What type of space are you looking for?"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>
            <DrawerFooter className="px-0">
              <Button type="submit" className="w-full">
                Submit Registration
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
