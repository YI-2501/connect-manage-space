
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogIn, UserPlus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Bienvenue</h1>
          <p className="text-muted-foreground">
            Connectez-vous ou créez un compte pour continuer
          </p>
        </div>
        
        <div className="grid gap-4">
          <Link to="/login">
            <Button className="w-full group" size="lg">
              <LogIn className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Connexion
            </Button>
          </Link>
          
          <Link to="/register">
            <Button variant="outline" className="w-full group" size="lg">
              <UserPlus className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Inscription
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Index;
