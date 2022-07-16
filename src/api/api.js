// import axios from "axios";
// export const baseURL = 'https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b'

// export const fetchPosts = async () => {


    //  const response = await axios.post(`${baseURL}/posts`, {

    //     post: {
    //       title: title,
    //       description: description,
    //       price: price,
    //       location: location,
    //       // willDeliver: `${willDeliver}`,
    //     },
    //   });
     
    // } catch (error) {
    //   console.error(error);
    // }





    allPosts.map((eachPost, idx) => {
        return (
          
          <div key={idx} className="individual-post">
            <span>Item for sale: </span> <span>{eachPost.title}</span>
            <p>Item description: {eachPost.description}</p>
            <p>Item Price: ${eachPost.price}</p>
            <p>Seller: {eachPost.author.username}</p>
          </div>
        );
      })