import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Center, Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";
import American from "../../foodImages/American.jpg";
import Asian from "../../foodImages/Asian.jpg";
import Bakery from "../../foodImages/Bakery.jpg";
import BBQ from "../../foodImages/BBQ.jpg";
import Breakfast from "../../foodImages/Breakfast.jpg";
import BubbleTea from "../../foodImages/BubbleTea.jpg";
import Burgers from "../../foodImages/Burgers.jpg";
import Carribean from "../../foodImages/Caribbean.jpg";
import Cafe from "../../foodImages/Cafe.png";
import Chinese from "../../foodImages/Chinese.jpg";
import Coffee from "../../foodImages/Coffee.jpg";
import Columbian from "../../foodImages/Columbian.jpg";
import ComfortFood from "../../foodImages/ComfortFood.jpg";
import Deli from "../../foodImages/Deli.jpeg";
import Desserts from "../../foodImages/Desserts.jpg";
import Dominican from "../../foodImages/Dominican.jpg";
import FastFood from "../../foodImages/FastFood.jpg";
import GlutenFree from "../../foodImages/GlutenFree.jpeg";
import Greek from "../../foodImages/Greek.jpg";
import Haitian from "../../foodImages/Haitian.jpg";
import Halal from "../../foodImages/Halal.jpg";
import Healthy from "../../foodImages/Healthy.jpg";
import IceCream from "../../foodImages/IceCream.jpg";
import Indian from "../../foodImages/Indian.jpg";
import Italian from "../../foodImages/Italian.jpeg";
import Jamacian from "../../foodImages/Jamacian.jpg";
import Japanese from "../../foodImages/Japanese.jpg";
import Jewish from "../../foodImages/Jewish.jpg";
import Korean from "../../foodImages/Korean.jpg";
import Kosher from "../../foodImages/Kosher.jpg";
import LatinAmerican from "../../foodImages/LatinAmerican.jpg";
import Malaysian from "../../foodImages/Malaysian.jpg";
import Mediterranean from "../../foodImages/Mediterranean.jpg";
import Mexican from "../../foodImages/Mexican.jpg";
import MiddleEastern from "../../foodImages/MiddleEastern.jpg";
import Pizza from "../../foodImages/Pizza.jpg";
import Ramen from "../../foodImages/Ramen.jpg";
import Sandwiches from "../../foodImages/Sandwiches.jpg";
import Seafood from "../../foodImages/Seafood.jpg";
import Smoothies from "../../foodImages/Smoothies.jpg";
import SoulFood from "../../foodImages/SoulFood.png";
import Spanish from "../../foodImages/Spanish.jpg";
import StreetFood from "../../foodImages/StreetFood.jpg";
import Sushi from "../../foodImages/Sushi.jpg";
import Taiwanese from "../../foodImages/Taiwanese.jpg";
import Thai from "../../foodImages/Thai.jpg";
import Vegan from "../../foodImages/Vegan.jpg";
import Vegetarian from "../../foodImages/Vegetarian.jpg";
import Viet from "../../foodImages/Viet.jpg";
import Wings from "../../foodImages/Wings.jpg";
import Wraps from "../../foodImages/Wraps.jpg";

const Selection = () => {
  //All images for the cuisine buttons
  const foodCategories = [
    {
      name: "American",
      image: American,
    },
    {
      name: "Asian",
      image: Asian,
    },
    {
      name: "Bakery",
      image: Bakery,
    },
    {
      name: "BBQ",
      image: BBQ,
    },
    {
      name: "Breakfast",
      image: Breakfast,
    },
    {
      name: "Bubble Tea",
      image: BubbleTea,
    },
    {
      name: "Burgers",
      image: Burgers,
    },
    {
      name: "Cafe",
      image: Cafe,
    },
    {
      name: "Caribbean",
      image: Carribean,
    },
    {
      name: "Chinese",
      image: Chinese,
    },
    {
      name: "Coffee and Tea",
      image: Coffee,
    },
    {
      name: "Colombian",
      image: Columbian,
    },
    {
      name: "Comfort Food",
      image: ComfortFood,
    },
    {
      name: "Deli",
      image: Deli,
    },
    {
      name: "Desserts",
      image: Desserts,
    },
    {
      name: "Dominican",
      image: Dominican,
    },
    {
      name: "Fast Food",
      image: FastFood,
    },
    {
      name: "Gluten Free",
      image: GlutenFree,
    },
    {
      name: "Greek",
      image: Greek,
    },
    {
      name: "Haitian",
      image: Haitian,
    },
    {
      name: "Halal",
      image: Halal,
    },
    {
      name: "Healthy",
      image: Healthy,
    },
    {
      name: "Ice Cream",
      image: IceCream,
    },
    {
      name: "Indian",
      image: Indian,
    },
    {
      name: "Italian",
      image: Italian,
    },
    {
      name: "Jamaican",
      image: Jamacian,
    },
    {
      name: "Japanese",
      image: Japanese,
    },
    {
      name: "Jewish",
      image: Jewish,
    },
    {
      name: "Smoothies",
      image: Smoothies,
    },
    {
      name: "Korean",
      image: Korean,
    },
    {
      name: "Kosher",
      image: Kosher,
    },
    {
      name: "Latin American",
      image: LatinAmerican,
    },
    {
      name: "Malaysian",
      image: Malaysian,
    },
    {
      name: "Mediterranean",
      image: Mediterranean,
    },
    {
      name: "Mexican",
      image: Mexican,
    },
    {
      name: "Middle Eastern",
      image: MiddleEastern,
    },
    {
      name: "Pizza",
      image: Pizza,
    },
    {
      name: "Ramen",
      image: Ramen,
    },
    {
      name: "Sandwiches",
      image: Sandwiches,
    },
    {
      name: "Seafood",
      image: Seafood,
    },
    {
      name: "Soul Food",
      image: SoulFood,
    },
    {
      name: "Spanish",
      image: Spanish,
    },
    {
      name: "Street Food",
      image: StreetFood,
    },
    {
      name: "Sushi",
      image: Sushi,
    },
    {
      name: "Taiwanese",
      image: Taiwanese,
    },
    {
      name: "Thai",
      image: Thai,
    },
    {
      name: "Vegan",
      image: Vegan,
    },
    {
      name: "Vegetarian",
      image: Vegetarian,
    },
    {
      name: "Vietnamese",
      image: Viet,
    },
    {
      name: "Wings",
      image: Wings,
    },
    {
      name: "Wraps",
      image: Wraps,
    },
  ];

  //Render the food buttons
  return (
    <Flex direction="column">
      <Flex direction="row" flexWrap="wrap" w="100%">
        {foodCategories.map((food) => {
          return (
            <Button key={food.name} variant="solid" margin=".5rem">
              <Avatar
                src={food.image}
                size="sm"
                justifyContent="flex-start"
                mr=".5rem"
              />
              {food.name}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Selection;
