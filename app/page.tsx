import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const WelcomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <span className="text-2xl font-bold text-primary-foreground">
                B
              </span>
            </div>
          </div>
          <CardTitle className="mb-2 text-3xl font-bold text-foreground">
            Bambu Danışmanlık
          </CardTitle>
          <CardDescription className="text-xl text-primary">
            Personel Yönetim Sistemi
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4 text-center text-muted-foreground">
            <p>Kapsamlı personel yönetim çözümünüze hoş geldiniz.</p>
            <p>İK süreçlerinizi kolaylaştırın ve verimliliğinizi artırın.</p>
          </div>

          <div className="flex justify-center pt-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-full bg-primary px-8 py-6 text-lg text-primary-foreground transition-all duration-300 hover:bg-primary/90"
              >
                Panele Git
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePage;
