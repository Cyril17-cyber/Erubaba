// /components/ProductCard.tsx
import { Product } from "./Dummydata";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import style from "@/app/Landing.module.css";
import Link from "next/link";

interface Props {
  item: Product;
}

export default function ProductCard({ item }: Props) {
  return (
    <div className="shadow-md bg-white rounded-lg p-4 flex flex-col">
      <img
        src={item.img}
        alt={item.name}
        className="h-40 w-full object-cover mb-2 rounded-lg"
      />
      <h3 className="font-medium">{item.name}</h3>
      <Link href={"/"} className="text-sm text-gray-500 underline">{item.seller}</Link>
      <p className="mt-3 font-bold">₦{item.price.toLocaleString()}</p>
      <div className="flex items-center my-3!">
        <Rating size="small" value={item.rated} precision={0.5} readOnly />
        <Link
          href={"/reviews"}
          className={`${style.redColor} text-sm text-gray-500 ml-3 underline`}
        >
          Reviews
        </Link>
      </div>
      <Button
        variant="contained"
        className={`${style.addToCartButton} text-white!`}
      >
        Add to Cart
      </Button>
    </div>
  );
}
