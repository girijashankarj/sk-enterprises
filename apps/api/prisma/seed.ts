import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@skenterprises.example" },
    create: {
      email: "admin@skenterprises.example",
      fullName: "SK Admin",
      role: UserRole.ADMIN,
      employeeProfile: {
        create: {
          salaryBase: 50000,
          leaveAllowance: 24
        }
      }
    },
    update: {}
  });
}

main().finally(() => prisma.$disconnect());
