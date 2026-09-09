"use client";

import React, { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { Select } from "@/components/atoms/Select";
import { enquiryService } from "@/services/enquiryService";
import { RequirementType } from "@/types/enquiry";
import { CheckCircle2, Send } from "lucide-react";

interface EnquiryFormProps {
  propertyName?: string;
  propertyId?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ propertyName, propertyId }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("Oragadam, Chennai");
  const [requirementType, setRequirementType] = useState<RequirementType>("Manufacturing");
  const [spaceRequired, setSpaceRequired] = useState("50,000 Sq. Ft.");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{ referenceId: string; message: string } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !phone || !company) {
      setError("Please fill in all mandatory fields (Name, Company, Email, Phone).");
      return;
    }

    setIsLoading(true);
    try {
      const res = await enquiryService.submitEnquiry({
        name,
        company,
        email,
        phone,
        preferredLocation,
        propertyId,
        propertyName,
        requirementType,
        spaceRequired,
        message,
      });
      setSuccessResult({
        referenceId: res.referenceId,
        message: res.message,
      });
    } catch {
      setError("Failed to submit enquiry. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (successResult) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-emerald-900">Enquiry Submitted Successfully!</h3>
        <p className="mt-2 text-sm text-emerald-700">{successResult.message}</p>
        <div className="mt-4 inline-block bg-white border border-emerald-200 px-4 py-2 rounded-md font-mono text-xs text-emerald-800">
          Reference ID: {successResult.referenceId}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        {propertyName ? `Enquire About ${propertyName}` : "Submit Industrial Space Requirement"}
      </h3>
      <p className="text-sm text-slate-600 mb-6">
        Fill out the details below and our industrial leasing advisory team will get in touch with customized availability and lease terms.
      </p>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Company Name *"
          placeholder="Acme Corporation"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email Address *"
          type="email"
          placeholder="john@acme.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Phone Number *"
          type="tel"
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Preferred Location"
          value={preferredLocation}
          onChange={(e) => setPreferredLocation(e.target.value)}
          options={[
            { label: "Oragadam, Chennai", value: "Oragadam, Chennai" },
            { label: "Sriperumbudur, Chennai", value: "Sriperumbudur, Chennai" },
            { label: "Poonamallee, Chennai", value: "Poonamallee, Chennai" },
            { label: "OMR Sipcot, Chennai", value: "OMR Sipcot, Chennai" },
            { label: "Coimbatore", value: "Coimbatore" },
            { label: "Devanahalli, Bengaluru", value: "Devanahalli, Bengaluru" },
          ]}
        />
        <Select
          label="Requirement Type"
          value={requirementType}
          onChange={(e) => setRequirementType(e.target.value as RequirementType)}
          options={[
            { label: "Manufacturing", value: "Manufacturing" },
            { label: "Warehousing", value: "Warehousing" },
            { label: "Logistics", value: "Logistics" },
            { label: "Distribution", value: "Distribution" },
            { label: "Built-to-Suit", value: "Built-to-Suit" },
            { label: "Other", value: "Other" },
          ]}
        />
        <Input
          label="Approx. Space Required"
          placeholder="e.g. 50,000 Sq. Ft."
          value={spaceRequired}
          onChange={(e) => setSpaceRequired(e.target.value)}
        />
      </div>

      <Textarea
        label="Additional Requirements / Message"
        placeholder="Mention clear height requirements, power load needs, dock bay count, or timeline..."
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button type="submit" variant="primary" size="lg" isLoading={isLoading} className="w-full justify-center gap-2 mt-4">
        <Send className="h-4 w-4" /> Submit Enquiry
      </Button>
    </form>
  );
};
