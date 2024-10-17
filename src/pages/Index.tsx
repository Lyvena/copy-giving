import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Sparkles } from "lucide-react"
import CopyGenerator from '@/components/CopyGenerator';
import Header from '@/components/Header';

const Index = () => {
  const { toast } = useToast()

  const handleGenerate = () => {
    // TODO: Implement AI generation logic
    toast({
      title: "Copy generated!",
      description: "Your fundraising copy has been created.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI-Powered Fundraising Copy Generator</h1>
        <CopyGenerator onGenerate={handleGenerate} />
      </main>
    </div>
  );
};

export default Index;