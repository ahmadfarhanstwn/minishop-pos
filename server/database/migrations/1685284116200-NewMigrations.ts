import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1685284116200 implements MigrationInterface {
    name = 'NewMigrations1685284116200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`business\` (\`business_id\` int NOT NULL AUTO_INCREMENT, \`business_username\` varchar(255) NOT NULL, \`business_email\` varchar(255) NOT NULL, \`business_name\` varchar(255) NOT NULL, \`business_is_active\` tinyint NOT NULL DEFAULT 1, \`business_created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`business_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`business\``);
    }

}
