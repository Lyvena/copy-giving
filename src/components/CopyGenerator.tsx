import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface CopyGeneratorProps {
  onGenerate?: () => void;
}

const CopyGenerator: React.FC<CopyGeneratorProps> = ({ onGenerate }) => {
  const [loading, setLoading] = useState(false);
  const [organization, setOrganization] = useState('');
  const [mission, setMission] = useState('');
  const [generatedCopy, setGeneratedCopy] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement actual AI generation logic
    setTimeout(() => {
      setGeneratedCopy("This is a placeholder for the AI-generated fundraising copy. It would describe the mission of " + organization + " and explain why donors should support their cause.");
      setLoading(false);
      
      toast({
        title: "Copy generated!",
        description: "Your fundraising copy has been created.",
      });
      
      if (onGenerate) {
        onGenerate();
      }
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Organization Name"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          required
        />
        <Textarea
          placeholder="Describe your organization's mission"
          value={mission}
          onChange={(e) => setMission(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Copy
            </>
          )}
        </Button>
      </form>
      {generatedCopy && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Generated Fundraising Copy:</h2>
          <p className="text-gray-700">{generatedCopy}</p>
        </div>
      )}
    </div>
  );
};

export default CopyGenerator;