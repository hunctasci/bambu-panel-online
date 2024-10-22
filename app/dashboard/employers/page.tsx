import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { fetchEmployers } from "@/lib/data";

export default async function EmployersPage() {
  const data = await fetchEmployers();

  return (
    <div className="my-3">
      <div className="flex justify-between gap-2">
        <h1 className="mb-5 text-2xl font-bold">Müşteriler</h1>
        <Button asChild className="w-full bg-lime-500 md:w-2/6">
          <Link href="/dashboard/employers/add">Musteri Ekle</Link>
        </Button>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}