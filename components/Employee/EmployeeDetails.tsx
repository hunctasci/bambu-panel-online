import { EmployeeType } from "@/lib/types"; // Adjust the import path as needed
import { ReactNode } from "react";
import Image from "next/image";

// Props for displaying individual employee details
interface EmployeeDetailsProps {
  employee: EmployeeType;
}

// Props for each information item in the details
interface InfoItemProps {
  label: string;
  value: ReactNode;
}

// InfoItem component for displaying a labeled value
const InfoItem = ({ label, value }: InfoItemProps) => (
  <div>
    <span className="font-semibold">{label}:</span> {value || "Bilgi Yok"}
  </div>
);

// Main component to display detailed information about the employee
const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div className="md:flex">
        {/* Image Section */}
        <div className="p-4 md:w-1/3">
          {employee.image?.url ? (
            <Image
              src={employee.image.url}
              width={300}
              height={300}
              alt="employee image"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <span>Resim Yok</span>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="p-6 md:w-2/3">
          <h2 className="mb-4 text-2xl font-bold">{`${employee.firstName} ${employee.lastName}`}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoItem label="Doğum Tarihi" value={employee.age || ""} />
            <InfoItem label="Adres" value={employee.address || ""} />
            <InfoItem
              label="Telefon Numarası"
              value={employee.phoneNumber || ""}
            />
            <InfoItem
              label="Medeni Durum"
              value={employee.maritalStatus || ""}
            />
            <InfoItem label="Sigara Kullanımı" value={employee.smoking || ""} />
            <InfoItem
              label="Oturum İzni"
              value={employee.residencyPermit || ""}
            />
            <InfoItem label="Tecrübe" value={employee.experience || ""} />
            <InfoItem
              label="Yeterlilikler"
              value={employee.competencies || ""}
            />
            <InfoItem label="Hayvan Bilgisi" value={employee.petsInfo || ""} />
            <InfoItem label="Referanslar" value={employee.references || ""} />
            <InfoItem
              label="Maaş Beklentisi"
              value={employee.salaryExpectation || ""}
            />
            <InfoItem
              label="İkamet Beklentisi"
              value={employee.residencyExpectation || ""}
            />
            <InfoItem
              label="Tercih Edilen İlçe"
              value={employee.preferredDistrict || ""}
            />
          </div>
          <div className="mt-6 space-y-4">
            <InfoItem label="Notlar" value={employee.notes || ""} />
            <InfoItem
              label="Oluşturulma Tarihi"
              value={employee.createdAt?.toLocaleString() || ""}
            />
            <InfoItem
              label="Güncellenme Tarihi"
              value={employee.updatedAt?.toLocaleString() || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
