// 2.  Questions:a, b and c are based on the following two arrays:users and products

const { set } = require("mongoose");

const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "17/05/2019 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "17/05/2019 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "17/05/2019 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "17/05/2019 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "17/05/2019 10:00 AM",
      isLoggedIn: false,
    },
  ];
  
  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];
  
  // a. Imagine you are getting the above users collection from a MongoDB database.
  
  // 	a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
  // 	b. Create a function called ***signIn*** which allows user to sign in to the application
  
  // b. The products array has  three elements and each of them has six properties.
  
  // 	a. Create a function called ***rateProduct*** which rates the product
  // 	b. Create a function called ***averageRating*** which calculate the average rating of a product
  
  // c. Create a function called ***likeProduct***. This function will helps to like to the product if it is not liked and remove like if it was liked.
  
  
  //signUp 

const signup = (newUser) => {
  let user = false;
  users.forEach(element => {
    if(element.username === newUser.username)
      user = true;  
  });

  if(user === true) {
    console.log("user already exist");
  } else {
    users.push(user);
    console.log("user added");
  }
}

const newUser = {
  _id: "ab12ex",
  username: "Alehx",
  email: "alex@alex.com",
  password: "123123",
  createdAt: "17/05/2019 9:00 AM",
  isLoggedIn: false
}

// signup(newUser);


const signIn = (userName, password) => {
  let isLoggedIn;
  users.forEach((el) => {
    if(el.username === userName && el.password === password)
      isLoggedIn = el;
  })
  if(isLoggedIn)
  console.log(`user logIn succesful with data!! username ${isLoggedIn.username}`)
  else
  console.log(`please enter vallid username and password`)

};

signIn("Martnha", "123222")



  
  
// //product rating
  
// //since user is already logged-in, his username is already saved in localStorage//////
//   const username = localStorage.getItem("username")
//   //since we are a product page so we can have productId
//   const productId = useParams()
  
//   ///as user clicked on a product the perticular product page will open and there is a option of rate product will be shown///
//   //////as soon as user input the rate and click on save we will update the data///// 
  
//   const [products, setProducts] = useState(product)
// //initial value taken from abve declared product
  
//   const [rate, setrate] = useState("")
   
//   const submit = () => {
//     setProducts({ ...products, products.rate: rate })
  
//     const updateRate = await fetch(`${API}/${productId}`, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ratings: rate}),
//     }).then((res) => res.json).catch(err=>console.log(err))
    
//     updateRate()
  
//     }