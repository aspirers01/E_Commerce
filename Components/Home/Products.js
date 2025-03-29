import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/Redux/CartReducer";
function Products() {
  const [item, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("jewelery");
  const [items, setItems] = useState([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);

  const navigation = useNavigation();
  useEffect(() => {
    async function getProducts() {
      try {
        await axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            setProducts(response.data);
          });
      } catch (err) {
        console.log("Error", err);
      }
    }

    getProducts();
  }, [item]);

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);
  return (
    <>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          width: "45%",
          marginBottom: open ? 50 : 15,
        }}
      >
        <DropDownPicker
          style={{
            borderColor: "#B7B7B7",
            height: 30,
            marginBottom: open ? 120 : 15,
          }}
          open={open}
          value={category} //genderValue
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
          placeholder="choose category"
          onOpen={onGenderOpen}
          // onChangeValue={onChange}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item
          ?.filter((item) => item.category === category)
          .map((item, id) => (
            <View
              key={id}
              style={{
                margin: 5,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f2f2f2",
                elevation: 50,
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 150, height: 150, resizeMode: "contain" }}
              />
              <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
                {item.title}
              </Text>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Price: {item.price}$
                </Text>

                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "green",
                  }}
                >
                  Rating: {item.rating.rate} ({item.rating.count})
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  {
                    item.carouselImages = [item.image];
                  }

                  navigation.navigate("ProductInfo", {
                    item: item,
                  });
                }}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Text
                  style={{
                    backgroundColor: "#f0c14b",
                    padding: 5,
                    marginTop: 10,
                    width: 150,
                    textAlign: "center",
                    borderRadius: 5,
                  }}
                >
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </>
  );
}

export default Products;
