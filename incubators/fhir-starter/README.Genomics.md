Genomics - FHIR v3.0.1 https://www.hl7.org/fhir/genomics.html

ΦX174

Phi X 174 - Wikipedia https://en.wikipedia.org/wiki/Phi_X_174

DNAtix has completed the first Proof Of Concept (POC) test by transferring the complete genome sequence of a virus - Enterobacteria phage phiX174 sensu lato - over the Ethereum Blockchain. The bacteria phage, a single-stranded DNA (ssDNA) virus and the first DNA-based genome to be sequenced.

The first successful transfer of DNA Sequence over the Ethereum Blockchain https://www.prnewswire.com/news-releases/the-first-successful-transfer-of-dna-sequence-over-the-ethereum-blockchain-300630014.html


tools-iuc/phiX174.fasta at master · galaxyproject/tools-iuc https://github.com/galaxyproject/tools-iuc/blob/master/data_managers/data_manager_fetch_genome_dbkeys_all_fasta/test-data/phiX174.fasta

Cigar Strings For Dummies https://jef.works/blog/2017/03/28/CIGAR-strings-for-dummies/


```
{
  "resourceType": "Sequence",
  "id": "phix174-variant",
  "type": "dna",
  "coordinateSystem": 0,
  "referenceSeq": {
    "referenceSeqString": "GAGTTTTATCGCTTCCATGACGCAGAAGTTAACACTTTCGGATATTTCTGATGAGTCGAAAAATTATCTT...",
    "strand": 1,
    "windowStart": 0,
    "windowEnd": 5386 
  },
  "variant": [
    {
      "start": 2,
      "end": 2,
      "observedAllele": "ATG",
      "referenceAllele": "-",
      "cigar": "3I"
    },
    {
      "start": 4,
      "end": 5,
      "observedAllele": "T",
      "referenceAllele": "A",
      "cigar": "1M"
    },
    {
      "start": 6,
      "end": 7,
      "observedAllele": "-",
      "referenceAllele": "T",
      "cigar": "1D"
    }
  ],
  "observedSeq": "ACATGGTAGC"
}
```