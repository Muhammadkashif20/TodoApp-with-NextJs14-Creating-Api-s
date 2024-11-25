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
        completed: false,
      },
      {
        id: 5,
        title: "Plan a Freelancing Portfolio",
        completed: false,
      },
    ];
    // GET Request For Todo
    export async function GET() {
      return Response.json({
              data:todoData,
              msg:'Fetch Api Successfully'
          })
    }
    // POST Request For Todo
    export async function POST(request) {
      let data=await request.json()
      const obj={
          ...data,
        isCompleted:false,
        id:todoData.length+1
      }
      todoData.push(obj)
      console.log('data from frontend to backend=>',data);
      return Response.json({
              data:todoData,
              msg:'add Todo Successfully'
          })
    }
    // PUT Request For Todo

  export async function PUT(request) {
      let data=await request.json()
      console.log('dataPUT=>',data);
      let todoIndex=todoData.findIndex((todo)=>todo.id==data.id)
      todoData[todoIndex]=data
      return Response.json({
              data:todoData,
              msg:'add Todo Successfully'
          })
    }
    