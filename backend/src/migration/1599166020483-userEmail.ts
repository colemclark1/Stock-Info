import {MigrationInterface, QueryRunner} from "typeorm";

export class userEmail1599166020483 implements MigrationInterface {
    name = 'userEmail1599166020483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
