using System;
using System.Collections.Generic;
using System.Text;

namespace Aula11
{
    public class Gato : Mamífero
    {
        public Gato()
        {
            //this.Caracteristicas();
        }
        protected override void Caracteristicas()
        {
            base.Caracteristicas();
            Console.WriteLine("Os gatos se alimentam de ração própria para gatos");
        }
    }
}
