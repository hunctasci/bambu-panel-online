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
import { EmployerType } from "@/lib/types";

export const columns: ColumnDef<EmployerType>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const employerId = row.original._id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Açılır menüyü aç</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-5">
            <Link href={`/dashboard/employers/${employerId}`} passHref>
              <DropdownMenuItem asChild>
                <a>Görüntüle</a>
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/employers/${employerId}/edit`} passHref>
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
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
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
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
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
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
  },
  {
    accessorKey: "placeType",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Yer Tipi
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
  },
  {
    accessorKey: "occupation",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Meslek
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
  },
  {
    accessorKey: "requestedJob",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        İstenen İş
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
  },
  {
    accessorKey: "childrenInfo",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Çocuk Bilgisi
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>() || "Bilgi yok"}</div>,
  },
  {
    accessorKey: "petsInfo",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Evcil Hayvan Bilgisi
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>() || "Bilgi yok"}</div>,
  },
  {
    accessorKey: "healthCondition",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Sağlık Durumu
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>() || "Bilgi yok"}</div>,
  },
  {
    accessorKey: "cleaningRequests",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Temizlik İstekleri
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>() || "Bilgi yok"}</div>,
  },
  {
    accessorKey: "mealRequests",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Yemek İstekleri
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>() || "Bilgi yok"}</div>,
  },
  {
    accessorKey: "insuranceInterest",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Sigorta İlgisi
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>() || "Bilgi yok"}</div>,
  },
  {
    accessorKey: "budget",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Bütçe
      </Button>
    ),
    cell: ({ getValue }) => <div>{getValue<string>() || "Belirtilmemiş"}</div>,
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
    cell: ({ getValue }) => <div>{getValue<string>() || "Not yok"}</div>,
  },
];
