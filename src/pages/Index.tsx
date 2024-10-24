import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Gift, Sparkles, Target } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">AI-Powered Fundraising Copy</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Generate compelling fundraising copy in seconds using advanced AI technology.
            </p>
            <Link to="/auth">
              <Button size="lg" className="text-lg">
                <Gift className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-600">Advanced AI technology that understands your mission</p>
              </div>
              <div className="text-center p-6">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Targeted Copy</h3>
                <p className="text-gray-600">Personalized content that resonates with your audience</p>
              </div>
              <div className="text-center p-6">
                <Gift className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Increased Donations</h3>
                <p className="text-gray-600">Optimize your fundraising efforts</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;