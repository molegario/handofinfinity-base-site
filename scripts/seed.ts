const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  //1 - seed categories in DB
  try {
    await database.category.createMany({
      data: [
        { name: "Movies" },
        { name: "Shows" },
        { name: "Tech" },
        { name: "Hardware" },
        { name: "Software" },
        { name: "Fashion" },
        { name: "Sports" },
        { name: "Music" },
        { name: "Food" },
        { name: "Health" },
        { name: "Anime" },
        { name: "Art" },
        { name: "Books" },
      ],
    });
    console.log("Success seeding categories!");

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Failed to seed DB.");
    }
  } finally {
    await database.$disconnect();
  }
}

main();
