"use client";
import LocalSwitcher from "@/components/local-switcher";
import { Button } from "@/components/ui/button";
import { useFetchPlan } from "@/hooks/useClientTodo";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { translate } from "@/lib/TranslatableObject";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/core/config/constants";
export default function Home() {
  const router = useRouter();
  const t = useTranslations('Index');
  const { plans, planIsError, planIsLoading, planRefetch } = useFetchPlan();
  return (
    <div className="flex flex-col py-2 space-y-4 items-center">
      <div className="flex flex-col space-y-4 items-center py-10">
        <h1 className="text-5xl font-semibold text-center text-gray-900">
          {t('title')}
        </h1>
        <Button variant="default" onClick={() => {
          router.push(ROUTES.PUBLIC.LOGIN);
        }}>
          Go to Login Page
        </Button>
      </div>
      <hr />
      <div className="flex flex-row justify-center space-x-4 items-center">
        <div>{t('description')}</div>
        <LocalSwitcher />
      </div>
      {
        planIsLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-row space-x-4">
            <Button onClick={() => {
              planRefetch();
            }
            }>Refresh</Button>
          </div>
        )
      }
      {
        planIsError && (
          <div>Error</div>
        )
      }
      {
        plans && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {plans.data.map((plan) => (
              <Card key={plan.id} className="p-4 shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{translate(plan.name, t('locale'))}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature.id} className="flex items-center space-x-4">
                        <div>{feature.featureValue ? "✅" : "❌"}</div>
                        <div>{translate(feature.featureName, t('locale'))}</div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-semibold">
                    {plan.price === 0 ? "Free" : `$${plan.price}/month`}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      }
    </div>
  );
}
