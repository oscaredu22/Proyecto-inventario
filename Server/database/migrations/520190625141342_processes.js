exports.up = function (knex, Promise) {
    return knex.schema.withSchema('processes')
        .createTable('reservations', function (table) {
            table.increments('id').unsigned().primary();
            table.integer('user_id').references('id').inTable('persons.users');
            table.string('hairdressers').notNullable();
            table.integer('sub_service_id').references('id').inTable(('corporations.sub_services'));
            table.string('reservation_date').notNullable();
            table.string('reservation_hour').notNullable();
            table.timestamps(true, true);
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.withSchema('processes')
        .dropTableIfExists('reservations')
};
