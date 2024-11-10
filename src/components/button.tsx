import { clsx } from "clsx";
import { LucideProps } from "lucide-react-native";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Variant = "primary" | "secondary" | "icon";

interface Props extends TouchableOpacityProps {
  variant?: Variant;
  title?: string;
  icon?: React.FC<LucideProps>;
  iconSize?: number;
  isLoading?: boolean;
}

export default function Button({
  variant = "primary",
  title,
  icon: Icon,
  iconSize = 16,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={clsx("flex-row items-center justify-center px-5 disabled:opacity-50", {
        "bg-pagbank-yellow-dark rounded-full h-11": variant === "primary",
        "bg-pagbank-blue py-4 rounded-full": variant === "secondary",
        "bg-pagbank-yellow-dark rounded-full px-2 py-4": variant === "icon",
      })}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={"#fff"} />
      ) : (
        <>
          {title && (
            <Text className="text-white text-base font-medium">{title}</Text>
          )}
          {Icon && (
            <Icon
              size={iconSize}
              style={[variant !== "icon" && { marginLeft: 8 }]}
              color="#fff"
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}
