import { query } from "express";
import {MigrationInterface, QueryRunner, QueryRunnerAlreadyReleasedError, Table} from "typeorm";

export class createOrphanages1614572091740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     //REALIZAR ALTERAÇÕES
    // CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO

        await queryRunner.createTable(new Table({

            name: 'orphanages',
            columns:[
                {
                    name: 'id',
                    type: 'interger',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:'nome',
                    type:'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },


            ],

        }))

    }      



    public async down(queryRunner: QueryRunner): Promise<void> {
        //DESFAZER O QUE FOI FEITO UP
        await queryRunner.dropTable('orphanages');
    }

}
