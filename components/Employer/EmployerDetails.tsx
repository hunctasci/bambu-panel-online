// components/EmployerDetails.tsx
import { EmployerType } from "@/lib/types";

interface EmployerDetailsProps {
  employer: EmployerType;
}

const EmployerDetails = ({ employer }: EmployerDetailsProps) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <strong>Ad:</strong> {employer.firstName}
    </div>
    <div>
      <strong>Soyad:</strong> {employer.lastName}
    </div>
    <div>
      <strong>Yas:</strong> {employer.age}
    </div>
    <div>
      <strong>Yer Tipi:</strong> {employer.placeType}
    </div>
    <div>
      <strong>Meslek:</strong> {employer.occupation}
    </div>
    <div>
      <strong>Istenen Is:</strong> {employer.requestedJob}
    </div>
    <div>
      <strong>Cocuk Bilgisi:</strong> {employer.childrenInfo}
    </div>
    <div>
      <strong>Evcil Hayvan Bilgisi:</strong> {employer.petsInfo}
    </div>
    <div>
      <strong>Saglik Durumu:</strong> {employer.healthCondition}
    </div>
    <div>
      <strong>Temizlik Istekleri:</strong> {employer.cleaningRequests}
    </div>
    <div>
      <strong>Yemek Talepleri:</strong> {employer.mealRequests}
    </div>
    <div>
      <strong>Sigorta Ilgisi:</strong> {employer.insuranceInterest}
    </div>
    <div>
      <strong>Butce:</strong> {employer.budget}
    </div>
    <div>
      <strong>Notlar:</strong> {employer.notes}
    </div>
  </div>
);

export default EmployerDetails;
