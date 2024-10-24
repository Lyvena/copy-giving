import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles, AlertCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import OpenAI from 'openai';
import { Alert, AlertDescription } from "@/components/ui/alert"

interface CopyGeneratorProps {
  onGenerate?: () => void;
}

const CopyGenerator: React.FC<CopyGeneratorProps> = ({ onGenerate }) => {
  const [loading, setLoading] = useState(false);
  const [organization, setOrganization] = useState('');
  const [mission, setMission] = useState('');
  const [generatedCopy, setGeneratedCopy] = useState('');
  const { toast } = useToast();

  const generateAICopy = async () => {
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please add your OpenAI API key in the settings page.",
        variant: "destructive",
      });
      return null;
    }

    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
    
    const prompt = `Generate compelling fundraising copy for ${organization}. 
    Their mission is: ${mission}
    Create a persuasive and emotional appeal that will resonate with potential donors.`;

    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Error generating copy:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const aiCopy = await generateAICopy();
    
    if (aiCopy) {
      setGeneratedCopy(aiCopy);
      toast({
        title: "Copy generated!",
        description: "Your AI-powered fundraising copy has been created.",
      });
      
      if (onGenerate) {
        onGenerate();
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Make sure to add your OpenAI API key in the settings to use AI-powered copy generation.
        </AlertDescription>
      </Alert>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Organization Name</label>
          <Input
            placeholder="Enter your organization's name"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
            className="transition-all focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Mission Statement</label>
          <Textarea
            placeholder="Describe your organization's mission and goals"
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            required
            className="min-h-[120px] transition-all focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate AI Copy
            </>
          )}
        </Button>
      </form>
      
      {generatedCopy && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Your AI-Generated Fundraising Copy:</h2>
          <div className="prose prose-sm max-w-none">
            {generatedCopy.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyGenerator;