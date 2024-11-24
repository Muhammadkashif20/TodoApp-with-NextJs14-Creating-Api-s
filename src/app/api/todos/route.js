const todoData = [
    {
      id: 1,
      title: "Learn React Basics",
      completed: false,
    },
    {
      id: 2,
      title: "Build a To-Do App",
      completed: false,
    },
    {
      id: 3,
      title: "Submit Assignment",
      completed: false,
    },
    {
      id: 4,
      title: "Watch JavaScript Tutorials",
      completed: true,
    },
    {
      id: 5,
      title: "Plan a Freelancing Portfolio",
      completed: false,
    },
  ];

  export async function GET() {
    return Response.json({
            data:todoData,
            msg:'Fetch Api Successfully'
        })
  }