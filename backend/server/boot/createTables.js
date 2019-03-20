'user strict';
module.exports = server => {
  const ds = server.dataSources.db;
  const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

  ds.autoupdate(lbTables, er => {
    if (er) {
      console.log(er);
      // throw er;
    }
    console.log(
      `Performed autoupdate on table ${lbTables} in ${ds.adapter.name}`
    );
  });
};
