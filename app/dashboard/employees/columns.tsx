"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { EmployeeType } from "@/lib/types";

export const columns: ColumnDef<EmployeeType>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const employeeId = row.original._id;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Açılır menüyü aç</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-5">
            <Link href={`/dashboard/employees/${employeeId}`} passHref>
              <DropdownMenuItem asChild>
                <a>Görüntüle</a>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/employees/${employeeId}/edit`} passHref>
              <DropdownMenuItem asChild>
                <a>Düzenle</a>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ad
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("firstName") || "-"}</div>,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Soyad
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("lastName") || "-"}</div>,
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Yaş
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("age") || "-"}</div>,
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Adres
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("address") || "-"}</div>,
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Telefon Numarası
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("phoneNumber") || "-"}</div>,
  },
  {
    accessorKey: "maritalStatus",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Medeni Durum
      </Button>
    ),
    cell: ({ row }) => (
      <div>{row.getValue<string>("maritalStatus") || "-"}</div>
    ),
  },
  {
    accessorKey: "competencies",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Yetenekler
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("competencies") || "-"}</div>,
  },
  {
    accessorKey: "petsInfo",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Hayvan Bilgisi
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("petsInfo") || "-"}</div>,
  },
  {
    accessorKey: "references",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Referanslar
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("references") || "-"}</div>,
  },
  {
    accessorKey: "salaryExpectation",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Maaş Beklentisi
      </Button>
    ),
    cell: ({ row }) => (
      <div>{row.getValue<string>("salaryExpectation") || "-"}</div>
    ),
  },
  {
    accessorKey: "residencyPermit",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        İkamet İzni
      </Button>
    ),
    cell: ({ row }) => (
      <div>{row.getValue<string>("residencyPermit") || "-"}</div>
    ),
  },
  {
    accessorKey: "experience",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Deneyim
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("experience") || "-"}</div>,
  },
  {
    accessorKey: "smoking",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Sigara Kullanımı
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("smoking") || "-"}</div>,
  },
  {
    accessorKey: "residencyExpectation",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        İkamet Beklentisi
      </Button>
    ),
    cell: ({ row }) => (
      <div>{row.getValue<string>("residencyExpectation") || "-"}</div>
    ),
  },
  {
    accessorKey: "preferredDistrict",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tercih Edilen İlçe
      </Button>
    ),
    cell: ({ row }) => (
      <div>{row.getValue<string>("preferredDistrict") || "-"}</div>
    ),
  },
  {
    accessorKey: "notes",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Notlar
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue<string>("notes") || "-"}</div>,
  },
];
