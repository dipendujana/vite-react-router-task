import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

type Posts = {
    id: number
    title: string
    body: string
}

const queryClient = new QueryClient()

function Posts() {
   
    return (
        <>
           <QueryClientProvider client={queryClient}>
            <PostList/>
           </QueryClientProvider>
        
        </>
    )
}

export default Posts

const PostList = () => {
    const { isPending, error, data } = useQuery({   
        queryKey: ['posts'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
                res.json(),
            ),
    })

    if (isPending) {
    return (
        <div className="flex items-center justify-center h-screen">
            <h2 className="text-2xl text-center">Loading...</h2>
        </div>
    );
    }

    if (error) return 'An error has occurred: ' + error.message

    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((posts: Posts)=>(
                <div className="text-center border-1 p-4" key={posts.id}>
                    <h3 className="text-xl font-bold pb-4">{posts.title}</h3>
                    <p>{posts.body}</p>
                </div>
    
            ))}
        </div>
        </>
    )
}