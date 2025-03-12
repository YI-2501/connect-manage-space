
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { User, Key, LogOut } from "lucide-react";

const Admin = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPassword && newPassword) {
      toast({
        title: "Succès",
        description: "Votre mot de passe a été modifié.",
      });
      setCurrentPassword("");
      setNewPassword("");
    }
  };

  const handleLogout = () => {
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès.",
    });
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Mon Profil</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-5 w-5" />
            Déconnexion
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Informations</h2>
                <p className="text-sm text-muted-foreground">Vos informations personnelles</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Nom</Label>
              <Input value="John Doe" disabled />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input value="john@example.com" disabled />
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Sécurité</h2>
                <p className="text-sm text-muted-foreground">Modifier votre mot de passe</p>
              </div>
            </div>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Modifier le mot de passe
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
