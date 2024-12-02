// ... existing imports ...
'use client'

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
  
  const ProblemList = () => {
    const [problems, setProblems] = useState([]);

    const router=useRouter()

    useEffect(() => {
      const fetchProblems = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/problems');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProblems(data);
        } catch (error) {
          console.error('Failed to fetch problems:', error);
        }
      };

      fetchProblems();
    }, []);

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Problem List</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Status</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Acceptance</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map((problem) => (
              <TableRow key={problem.id} onClick={()=>router.push(`/problems/${problem._id}`)}>
                <TableCell>{problem.status}</TableCell>
                <TableCell className="font-semibold">{problem.title}</TableCell>
                <TableCell>{problem.acceptance}</TableCell>
                <TableCell>
                  <span className={`text-${problem.difficulty === "Easy" ? "green" : problem.difficulty === "Medium" ? "orange" : "red"}-500`}>
                    {problem.difficulty}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  export default ProblemList