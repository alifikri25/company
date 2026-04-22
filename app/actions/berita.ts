'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getSemuaBerita() {
  return await prisma.berita.findMany({
    orderBy: { tanggal: 'desc' }
  })
}

export async function createBerita(formData: FormData) {
  const judul = formData.get('judul') as string
  const konten = formData.get('konten') as string
  const gambarUrl = formData.get('gambarUrl') as string
  if (!judul || !konten) return
  await prisma.berita.create({
    data: { judul, konten, gambarUrl: gambarUrl || null }
  })
  revalidatePath('/berita')
  revalidatePath('/admin/dashboard')
  redirect('/admin/dashboard/berita')
}

export async function deleteBerita(formData: FormData) {
  const id = Number(formData.get('id'))
  await prisma.berita.delete({ where: { id } })
  revalidatePath('/berita')
  revalidatePath('/admin/dashboard')
}

export async function getSemuaKarir() {
  return await prisma.karir.findMany({
    orderBy: { tanggal: 'desc' }
  })
}

export async function createKarir(formData: FormData) {
  const posisi = formData.get('posisi') as string
  const departemen = formData.get('departemen') as string
  const lokasi = formData.get('lokasi') as string
  const tipe = formData.get('tipe') as string
  const deskripsi = formData.get('deskripsi') as string
  const persyaratan = formData.get('persyaratan') as string
  if (!posisi || !departemen) return
  await prisma.karir.create({
    data: { posisi, departemen, lokasi, tipe, deskripsi, persyaratan }
  })
  revalidatePath('/karir')
  revalidatePath('/admin/dashboard')
  redirect('/admin/dashboard/karir')
}

export async function deleteKarir(formData: FormData) {
  const id = Number(formData.get('id'))
  await prisma.karir.delete({ where: { id } })
  revalidatePath('/karir')
  revalidatePath('/admin/dashboard')
}

export async function toggleKarir(formData: FormData) {
  const id = Number(formData.get('id'))
  const item = await prisma.karir.findUnique({ where: { id } })
  if (!item) return
  await prisma.karir.update({
    where: { id },
    data: { aktif: !item.aktif }
  })
  revalidatePath('/karir')
  revalidatePath('/admin/dashboard')
}

export async function getSemuaPesan() {
  return await prisma.pesanKontak.findMany({
    orderBy: { tanggal: 'desc' }
  })
}

export async function getPesanBelumDibaca() {
  return await prisma.pesanKontak.count({ where: { dibaca: false } })
}

export async function tandaiDibaca(formData: FormData) {
  const id = Number(formData.get('id'))
  await prisma.pesanKontak.update({
    where: { id },
    data: { dibaca: true }
  })
  revalidatePath('/admin/dashboard')
}

export async function deletePesan(formData: FormData) {
  const id = Number(formData.get('id'))
  await prisma.pesanKontak.delete({ where: { id } })
  revalidatePath('/admin/dashboard')
}

export async function kirimPesan(formData: FormData) {
  const nama = formData.get('nama') as string
  const email = formData.get('email') as string
  const subjek = formData.get('subjek') as string
  const pesan = formData.get('pesan') as string
  if (!nama || !email || !pesan) return
  await prisma.pesanKontak.create({
    data: { nama, email, subjek: subjek || 'Umum', pesan }
  })
  revalidatePath('/admin/dashboard')
  redirect('/kontak?sent=1')
}

export async function getStatistik() {
  const [totalBerita, totalKarir, totalPesan, pesanBaru] = await Promise.all([
    prisma.berita.count(),
    prisma.karir.count({ where: { aktif: true } }),
    prisma.pesanKontak.count(),
    prisma.pesanKontak.count({ where: { dibaca: false } })
  ])
  return { totalBerita, totalKarir, totalPesan, pesanBaru }
}
