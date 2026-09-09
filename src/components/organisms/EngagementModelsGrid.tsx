import React from "react";
import Link from "next/link";
import { engagementModelsData } from "@/data/engagementModels";
import { Button } from "@/components/atoms/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const EngagementModelsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {engagementModelsData.map((model) => (
        <div key={model.id} className="card flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{model.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{model.shortDescription}</p>

            <div className="space-y-2 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key Benefits:</p>
              {model.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link href="/enquire">
              <Button variant="outline" size="sm" className="w-full justify-center gap-1.5">
                Enquire About Model <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
