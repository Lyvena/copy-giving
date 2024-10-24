import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@lyvena.xyz" className="text-lg hover:text-primary transition-colors">
                info@lyvena.xyz
              </a>
            </div>
            <p className="text-center text-muted-foreground">
              We'd love to hear from you! Feel free to reach out with any questions about our AI-powered fundraising tools.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;