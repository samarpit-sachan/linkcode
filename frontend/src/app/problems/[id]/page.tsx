'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Editor from "@monaco-editor/react"
import { use, useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { error } from "console"


const ProblemDetail = () => {
    const [problem, setProblem] = useState()
    const [code, setCode] = useState(`class Solution {
    public:
        bool checkIfExist(vector<int>& arr) {
            
        }
};`)
    console.log("<<<>>>")
    const params = useParams();
    const problemId = params.id as string;
    console.log(problemId, 'problemId')

    useEffect(() => {
        const fetchProblem=async()=>{
            try{
                const response =await  fetch(`http://localhost:5000/api/problems/${problemId}`)
                if(!response.ok){

                }
                const data=await response.json();
                setProblem(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchProblem()

    },[])



    return (
        <div className="h-screen flex flex-col">
            {/* Top Navigation */}
            <div className="flex items-center px-4 py-2 border-b">
                <div className="flex items-center gap-4">
                    <span className="text-sm">Daily Question</span>
                    <span className="text-sm font-medium">1346. Check If N and Its Double Exist</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Button variant="outline" size="sm">Run</Button>
                    <Button size="sm">Submit</Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex">
                {/* Left Panel */}
                <div className="w-1/2 border-r">
                    <Tabs defaultValue="description" className="h-full">
                        <TabsList className="border-b px-4">
                            <TabsTrigger value="description">Description</TabsTrigger>
                            <TabsTrigger value="editorial">Editorial</TabsTrigger>
                            <TabsTrigger value="solutions">Solutions</TabsTrigger>
                            <TabsTrigger value="submissions">Submissions</TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className="p-4">
                            <h2 className="text-xl font-bold mb-4">{problem?.title}</h2>
                            <div className="space-y-4">
                                <p>Given an array <code className="bg-gray-100 px-1 rounded">arr</code> of integers, check if there exist two indices <code className="bg-gray-100 px-1 rounded">i</code> and <code className="bg-gray-100 px-1 rounded">j</code> such that:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><code className="bg-gray-100 px-1 rounded">i != j</code></li>
                                    <li><code className="bg-gray-100 px-1 rounded">0 &lt;= i, j &lt; arr.length</code></li>
                                    <li><code className="bg-gray-100 px-1 rounded">arr[i] == 2 * arr[j]</code></li>
                                </ul>

                                <div className="mt-6">
                                    <h3 className="font-bold mb-2">Example 1:</h3>
                                    <div className="bg-gray-50 p-4 rounded">
                                        <p><strong>Input:</strong> arr = [10,2,5,3]</p>
                                        <p><strong>Output:</strong> true</p>
                                        <p><strong>Explanation:</strong> For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]</p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        {/* Add other tab contents as needed */}
                    </Tabs>
                </div>

                {/* Right Panel */}
                <div className="w-1/2 flex flex-col">
                    <div className="border-b p-2 flex items-center">
                        <select className="border rounded px-2 py-1 text-sm">
                            <option>C++</option>
                            <option>Python</option>
                            <option>Java</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <Editor
                            height="100%"
                            defaultLanguage="cpp"
                            theme="vs-light"
                            value={code}
                            onChange={(value) => setCode(value || '')}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                lineNumbers: 'on',
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                            }}
                        />
                    </div>
                    <div className="border-t">
                        <Tabs defaultValue="testcase" className="w-full">
                            <TabsList className="px-4">
                                <TabsTrigger value="testcase">Testcase</TabsTrigger>
                                <TabsTrigger value="result">Result</TabsTrigger>
                            </TabsList>
                            <TabsContent value="testcase" className="p-4">
                                <Card>
                                    <CardContent className="p-4">
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm">Case 1</Button>
                                                <Button variant="outline" size="sm">Case 2</Button>
                                                <Button variant="outline" size="sm">+</Button>
                                            </div>
                                            <div className="bg-gray-50 p-2 rounded">
                                                arr = [10,2,5,3]
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProblemDetail