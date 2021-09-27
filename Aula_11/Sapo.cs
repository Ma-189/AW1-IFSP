using System;
using System.Collections.Generic;
using System.Text;

namespace Aula11
{
    public class Sapo : Anfíbio
    {
        public Sapo()
        {
            //this.Caracteristicas();
        }
        protected override void Caracteristicas()
        {
            base.Caracteristicas();
            Console.WriteLine("Os sapos se alimentam de muitos insetos (moscas, baratas, formigas) e de alguns animais invertebrados (aranhas, lesmas, minhocas)";
        }
    }

}
