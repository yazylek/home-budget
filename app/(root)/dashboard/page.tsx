"use client";

import { BudgetChart } from "@/components/dashboard/BudgetChart";
import { ExpensesChart } from "@/components/dashboard/ExpensesChart";
import { IncomeChart } from "@/components/dashboard/IncomeChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAuth } from "@/lib/context/AuthProvider";
import { Banknote, MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { token } = useAuth();
  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
  }, [token, router]);

  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:grid lg:grid-cols-2 ml-6 ">
      <div className="lg:col-start-1 lg:col-end-3">
        <h1 className="text-2xl lg:text-2xl ">
          Hello, Jan!
        </h1>
        <h2 className=" mb-4 text-sm text-neutral-500">
          Here is a brief overview of your home budget.
        </h2>

        <div className="grid grid-cols-4 gap-4">
                {/*   BUDGET CARD */}
            <Card className=" shadow-2xs col-span-2">
              <CardHeader className="flex">
                
                <Banknote/>
                Budget</CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">

                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-3xl">4,439.07<span className="text-neutral-400">PLN</span></h2>
                    <p className="text-xs flex">
                      <span className="text-green-500 font-semibold flex justify-center items-center">
                        <MoveUpRight size={12}/>
                        12%&nbsp;</span>more vs last month
                    </p>


                  <Button variant={"outline"} className="mt-12 cursor-pointer">Manage</Button>
                  </div>

                  <div className="flex items-end">
                    <BudgetChart/>
                  </div>
              </CardContent>
            </Card>

            {/* INCOME CARD */}
            <Card className=" shadow-2xs">
              <CardHeader>Income Breakdown</CardHeader>
              <CardContent className="">
                <IncomeChart/>
              
              </CardContent>
            </Card>
            <Card className=" shadow-2xs">
              <CardHeader>
                 Expenses Breakdown
                </CardHeader>
              <CardContent className="">
                <ExpensesChart/>
              
              </CardContent>
            </Card>
            
        </div>
       </div>
    </section>
  );
}
