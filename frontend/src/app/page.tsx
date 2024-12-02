'use client'

import Image from "next/image";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import NavBar from "@/nav-bar";


export default function Home() {
  return (
    <Card>
      <NavBar/>
      <CardContent className="mt-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome to Linkcode</h2>
          <p className="text-lg">Your ultimate coding platform for learning, practicing, and showcasing your skills.</p>
          <Button className="mt-4">Start Coding</Button>
        </div>
      </CardContent>
    </Card>
  );
}
