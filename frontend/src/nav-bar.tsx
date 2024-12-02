'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Button } from "./components/ui/button";
import { useRouter } from "next/navigation"
import { CardHeader } from "./components/ui/card";

const NavBar = () => {

    const router = useRouter()

    return (
        <CardHeader className="flex justify-center items-center shadow-lg">
            <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-3">
                    <div className="flex items-center gap-3 mr-20">
                        <NavigationMenuLink className="flex items-center gap-2">
                            <ion-icon name="code-working" />
                            <span className="font-semibold">Linkcode</span>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            Explore
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/problems">
                            Problems
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            Contest
                        </NavigationMenuLink>
                    </div>
                    <NavigationMenuItem className="flex gap-2">
                        <Button onClick={() => router.push('/login')}>Login</Button>
                        <Button onClick={() => router.push('/signup')}>SignUp</Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </CardHeader>
    )
}

export default NavBar