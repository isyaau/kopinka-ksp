import CustomPagination from '@/components/custom-pagination';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { handleChangePerPage } from '@/lib/utils';
import { Anggota, BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { RefreshCcw, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import FormAnggota from './components/FormAnggota';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Data Anggota',
    href: '/data-anggota',
  },
];

const Index = () => {
  const { anggotas }: any = usePage().props;
  const meta = anggotas.meta;
  const path = meta.path;

  // Sync state dengan query search saat komponen pertama kali dimuat
  const [search, setSearch] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('search') || '';
  });

  useEffect(() => {
    console.log(anggotas);
  }, []);

  // Fungsi pencarian
  const searchData = (e: React.FormEvent) => {
    e.preventDefault();

    router.visit(path, {
      data: { search },
      preserveState: true,
      preserveScroll: true,
    });
  };

  // Fungsi untuk mereset pencarian dan menghapus query dari URL
  const clearSearch = () => {
    setSearch('');
    router.visit(path, {
      data: {},
      preserveState: true,
      replace: true,
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Data Anggota" />

      {/* Filter & Pencarian */}
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {/* Selector Per Page */}
        <div className="flex items-center gap-x-2">
          <label htmlFor="perPage" className="font-medium">
            Tampilkan:
          </label>
          <select
            id="perPage"
            className="rounded-md border px-2 py-1"
            onChange={(e) =>
              handleChangePerPage(parseInt(e.target.value), path)
            }
            defaultValue={meta.per_page}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        {/* Form Search */}
        <form onSubmit={searchData} className="flex items-center gap-x-1">
          <input
            type="text"
            placeholder="Cari..."
            className="rounded-md border px-2 py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" size="icon">
            <Search size={16} />
          </Button>
          <Button size="icon" variant="outline" onClick={clearSearch}>
            <RefreshCcw size={16} />
          </Button>
        </form>
<FormAnggota/>
      </div>
      {/* Tabel Data Anggota */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-center">No</TableHead>
            <TableHead>Nomor Anggota</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Jenis Kelamin</TableHead>
            <TableHead>Usia</TableHead>
            <TableHead className="w-32 text-center">Opsi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {anggotas.data.length > 0 ? (
            anggotas.data.map((anggota: Anggota, index: number) => (
              <TableRow key={anggota.id ?? index}>
                <TableCell className="text-center">
                  {(meta.from ?? 0) + index}
                </TableCell>
                <TableCell>{anggota.nomor_anggota}</TableCell>
                <TableCell>{anggota.nama_lengkap}</TableCell>
                <TableCell>{anggota.jenis_kelamin}</TableCell>
                <TableCell>{anggota.usia}</TableCell>
                <TableCell className="text-center">
                  {/* Tambahkan tombol aksi di sini */}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                Tidak ada data ditemukan.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-4">
        <CustomPagination meta={meta} />
      </div>
    </AppLayout>
  );
};

export default Index;
