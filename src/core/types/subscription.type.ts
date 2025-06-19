import { Localized } from "@/lib/TranslatableObject";


export interface FeatureType {
    id: number;
    featureName: Localized;
    featureValue: boolean;
}

export interface SubscriptionPlanType {
    id: number;
    name: Localized;
    price: number;
    features: FeatureType[];
}