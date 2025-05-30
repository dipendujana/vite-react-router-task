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

    if (isPending) return <h2>Loading...</h2>

    if (error) return 'An error has occurred: ' + error.message

    return(
        <>
        <div className="posts-container">
            {data.map((posts: Posts)=>(
                <div className="post-card" key={posts.id}>
                    <h3>{posts.title}</h3>
                    <p>{posts.body}</p>
                </div>
    
            ))}
        </div>
        </>
    )
}