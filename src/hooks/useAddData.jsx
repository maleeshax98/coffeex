// import { collection, addDoc } from 'firebase/firestore';

// import React from 'react'
// import { app, db } from '../firebase/db';

// function useAddData() {

//     const addMenuDataToFirebase = async (menuData) => {
//         try {
//           for (const item of menuData) {
//             await addDoc(collection(db, 'dinner'), item);
//           }
//           console.log('Menu data added to Firebase successfully');
//         } catch (error) {
//           console.error('Error adding menu data to Firebase: ', error);
//         }
//     };
      
//     const menuData = [ 
//         {
//             "Item": "Grilled Salmon",
//             "Description": "Salmon fillet seasoned and grilled to perfection",
//             "Price": "$14.99",
//             "Rating": 4.6,
//             "img": "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2.jpg"
//         },
//         {
//             "Item": "Steak and Potatoes",
//             "Description": "Juicy steak served with roasted potatoes and vegetables",
//             "Price": "$16.99",
//             "Rating": 4.8,
//             "img": "https://www.spendwithpennies.com/wp-content/uploads/2021/09/Rosemary-Garlic-Steak-Potatoes-SpendWithPennies-6.jpg"
//         },
//         {
//             "Item": "Chicken Alfredo",
//             "Description": "Fettuccine pasta with creamy Alfredo sauce and grilled chicken",
//             "Price": "$12.99",
//             "Rating": 4.4,
//             "img": "https://images.themodernproper.com/billowy-turkey/production/posts/ChickenFettuccineAlfredo_11.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1675190172&s=89dafc9de3618b7673be90fa09af4044"
//         },
//         {
//             "Item": "Vegetable Stir-Fry",
//             "Description": "Assorted vegetables stir-fried in a savory sauce",
//             "Price": "$10.49",
//             "Rating": 4.5,
//             "img": "https://peasandcrayons.com/wp-content/uploads/2020/12/vegetable-stir-fry-noodles-recipe-.jpg"
//         },
//         {
//             "Item": "Mushroom Risotto",
//             "Description": "Creamy risotto with mushrooms and Parmesan cheese",
//             "Price": "$12.99",
//             "Rating": 4.6,
//             "img": "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg"
//         },
//         {
//             "Item": "Shrimp Scampi",
//             "Description": "Shrimp cooked with garlic, butter, and white wine served over pasta",
//             "Price": "$15.99",
//             "Rating": 4.3,
//             "img": "https://www.smalltownwoman.com/wp-content/uploads/2020/04/Shrimp-Scampi-Recipe-Card.jpg"
//         },
//         {
//             "Item": "Tofu and Vegetable Curry",
//             "Description": "Tofu and mixed vegetables in a flavorful curry sauce",
//             "Price": "$11.99",
//             "Rating": 4.2,
//             "img": "https://static01.nyt.com/images/2018/12/11/dining/mc-coconut-red-curry-with-tofu/mc-coconut-red-curry-with-tofu-articleLarge.jpg"
//         },
//         {
//             "Item": "Margherita Pizza",
//             "Description": "Tomato sauce, fresh mozzarella, basil, and olive oil on thin crust",
//             "Price": "$11.99",
//             "Rating": 4.8,
//             "img": "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg"
//         },
//         {
//             "Item": "Caprese Salad",
//             "Description": "Fresh mozzarella, tomatoes, basil, and balsamic glaze",
//             "Price": "$8.49",
//             "Rating": 4.4,
//             "img": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg"
//         },
//         {
//             "Item": "Teriyaki Chicken Bowl",
//             "Description": "Grilled teriyaki chicken with steamed rice and vegetables",
//             "Price": "$10.99",
//             "Rating": 4.5,
//             "img": "https://modernmealmakeover.com/wp-content/uploads/2020/10/IMG_6548-4.jpg"
//         }
//      ];
      
//     addMenuDataToFirebase(menuData);
      
// }

// export default useAddData
