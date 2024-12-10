import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1733835705365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "post" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                "title" character varying(100) NOT NULL, 
                "content" text NOT NULL, 
                "author" character varying(100) NOT NULL, 
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
                CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "post"`);
    }

}
