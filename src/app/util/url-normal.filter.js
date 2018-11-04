export const JediUrl = () => {
  return function(jedi) {
    const status = status => {
      if(status && typeof status === 'object') status = status.path;
      return (status || '').replace('status/', '');
    }
    return (`/jedi/${jedi.name || 'null'}/${jedi.master || 'null'}/${jedi.planet || 'null'}/${status(jedi.status) || 'null'}`)
      .replace(/ /g, '+');
  };
}

export const JediNormalize = () => {
  return function(jedi) {
    if(typeof jedi !== 'object') return null;
    if(jedi.status && jedi.status != 'null' && !jedi.status.includes('status/')) jedi.status = 'status/'+jedi.status;
    const normal = str => (str || '').replace('null', '').replace(/\+/g, ' ');
    return Object.keys(jedi)
      .reduce((acc, k) => Object.assign(acc, {[k]: normal(jedi[k])}), {})

  };
}