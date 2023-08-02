export default `const data8 = [];
for (let i = 0; i < 1 + Math.random() * 5; i++) {
    data8.push({title: \`node_\${i}\`, id: \`\${i}\`, loading: true});
}

<Tree data={data8} multi directory loadData={(data: any) => {
    return new Promise((resolve) => {
        const d: any = [];
        for (let i = 0; i < 1 + Math.random() * 5; i++) {
            d.push({title: \`node_\${data.id}_\${i}\`, id: \`\${data.id}_\${i}\`});
        }
        setTimeout(() => {
            resolve(d);
        }, 1000);
    });
}}/>`