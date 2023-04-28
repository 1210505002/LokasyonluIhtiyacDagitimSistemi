//Graf sinifi olusturuldu
export default class Graph {
  constructor(adjacency_list) {
    this.adjacency_list = adjacency_list;
  }
   heuristic(nodeA, nodeB) {
    //İki düğüm arasındaki öklid mesafesini hesaplama
    let dx = nodeA.x - nodeB.x;
    let dy = nodeA.y - nodeB.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  //Verilen düğümün komşuları döndüruldu
  get_neighbors(node) {
    return Object.entries(this.adjacency_list[node]);
  }

  a_star_algorithm(start_node, stop_node) {
    //Açık düğüm listesi
    const open_list = new Set([start_node]);
    //Kapalı düğüm listesi
    const closed_list = new Set([]);
    //Düğümlere olan maliyet tutuldu
    const g = {};
    g[start_node] = 0;
    //Bir düğümün ebeveyni tutuldu
    const parents = {};
    parents[start_node] = start_node;

    while (open_list.size > 0) {
      //Açık liste en az maliyetli düğüme göre sıralandi
      let n = null;

      for (const v of open_list) {
        if (
          n === null ||
          g[v] + this.heuristic(v, stop_node) < g[n] + this.heuristic(n, stop_node)
        ) {
          n = v;
        }
      }

      if (n === null) {
        console.log("Yol bulunamadi !");
        return null;
      }
      //Hedef düğüme ulaşıldıysa, en kısa yolun listesi oluşturuldu ve döndüruldu
      if (n === stop_node) {
        const reconst_path = [];
        while (parents[n] !== n) {
          reconst_path.push(n);
          n = parents[n];
        }
        reconst_path.push(start_node);
        reconst_path.reverse();

        console.log(`Izlenecek yol: ${reconst_path}`);
        return reconst_path;
      }
      //Açık listeye komşu düğümleri ekleyerek aramaya devam edildi
      for (const [m, weight] of this.get_neighbors(n)) {
        if (!open_list.has(m) && !closed_list.has(m)) {
          open_list.add(m);
          parents[m] = n;
          g[m] = g[n] + weight;
        } else {
          if (g[m] > g[n] + weight) {
            g[m] = g[n] + weight;
            parents[m] = n;
            if (closed_list.has(m)) {
              closed_list.delete(m);
              open_list.add(m);
            }
          }
        }
      }
      //En dusuk maliyetli dugum kapali listeye eklendi
      open_list.delete(n);
      closed_list.add(n);
    }

    console.log("Yol bulunamadi!");
    return null;
  }
}

