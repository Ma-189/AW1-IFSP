using System;
using System.Collections.Generic;
using System.Text;

namespace Aula11
{
    public class Jacaré : Réptil
    {
        public Jacaré()
        {
            //this.Caracteristicas();
        }
        protected override void Caracteristicas()
        {
            base.Caracteristicas();
            Console.WriteLine("Os jacarés se alimentam de peixes, aves e mamíferos");
        }
    }
}
